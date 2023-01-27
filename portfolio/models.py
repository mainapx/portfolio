from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.conf import settings

class Register(models.Model):
	firstname=models.CharField(max_length=50)
	emailid=models.CharField(max_length=50,primary_key=True)
	password=models.CharField(max_length=50)

class Login(models.Model):
	username=models.ForeignKey(Register,on_delete=models.CASCADE)
	password=models.CharField(max_length=50)


@receiver(post_save,sender=settings.AUTH_USER_MODEL)
def MyToken(sender,instance=None,created=False,**kwargs):
	if created:
		Token.objects.create(user=instance)