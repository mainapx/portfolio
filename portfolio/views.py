from django.shortcuts import render,redirect
from django.views import View
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from .serializer import SerialModel
from rest_framework.response import Response
import re
from django.http import HttpResponse
from portfolio.models import Login,Register
import codecs
import json

class PortFolioRegisterHandler(APIView):
	def post(self,request):
		if request.method == "POST":
			body=request.data
			firstname=str(body['firstname'])
			username=str(body['username'])
			password=str(body['password'])
			if Register.objects.filter(emailid=username).count() == 0 and username !=  "" and password !=  "" and  re.findall(".*@.*(.com|.in|.org.|.gov)$",username):
				a=Register(firstname=firstname,emailid=username,password=password)
				b=Login(password=password,username_id=username)
				a.save()
				b.save()
				request.session['LoggedIN']='AUTHORIZED'
				new_register={'status':'OK','message':'Account Created','Name':username}
				h=Response(new_register,status=status.HTTP_201_CREATED)
				return h
			elif Register.objects.filter(emailid=username).count() == 1 and username !=  "" and password !=  "" and  re.findall(".*@.*(.com|.in|.org.|.gov)$",username):
				h={'status':'Failed','message':'Account Already Exists'}
				return Response(h,status=status.HTTP_400_BAD_REQUEST)
			return Response({'status':'Failed','message':'Invalid Parameters'},status=status.HTTP_422_UNPROCESSABLE_ENTITY)
		return Response({'status':'Failed','message':'Method Not Allowed'},status=status.HTTP_405_METHOD_NOT_ALLOWED)

class PortFolioLoginHandler(APIView):
	def post(self,request):
		if request.method == "POST":
			getbody=json.loads(codecs.decode(request.body,"utf-8"))
			username=getbody['username']
			password=getbody['password']
			if Login.objects.filter(username_id=username,password=password).count() == 1:
				data=json.dumps(Register.objects.filter(emailid=username).values()[0])
				request.session['LoggedIN']='AUTHORIZED'
				return Response({'status':'OK','message':'Success','data':data},status=status.HTTP_200_OK)
			return Response({'status':'Failed','message':'Invalid Username or Password'},status=status.HTTP_400_BAD_REQUEST)
		return Response({'status':'Failed','message':'Method Not Allowed'},status=status.HTTP_405_METHOD_NOT_ALLOWED)

class PortFolioIndexHandler(APIView):
	def get(self,request):
		test=render(request,"index.html")
		test['Cache-Control']="no-cache, must-revalidate"
		return test

class PortFolioAdminHandler(APIView):
	def get(self,request):
		if 'LoggedIN' in request.session:
			test1=render(request,"index.html")
			test1['Cache-Control']="no-cache, must-revalidate"
			return test1
		return redirect("/")

class PortFolioLogoutHandler(APIView):
	def post(self,request):
		if 'LoggedIN' in request.session:
			del request.session['LoggedIN']
			return HttpResponse('Logout Successfully',status=302,content_type="text/plain")
		return Response({'status':'Failed','message':'Unauthorized'},status=status.HTTP_401_UNAUTHORIZED)

class PortFolioNewHandler(APIView):
	def post(self,request):
		j={'Response':403,'Message':'Method Not ALloweed'}
		rsp=Response(j)
		return rsp

@api_view(['GET'])
def Testing(request):
	h=Login.objects.all()
	return Response(p.data)

@api_view(['POST'])
def Postdata(request):
	g=list(Login.objects.all().values())[0]
	return Response(g,status=status.HTTP_201_CREATED)