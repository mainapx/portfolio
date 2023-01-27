from rest_framework import serializers
from .models import Login

class SerialModel(serializers.Serializer):
	class Meta:
		mymodal=Login
		fields='__all__'

