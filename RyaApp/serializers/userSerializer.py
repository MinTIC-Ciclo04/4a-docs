from rest_framework import serializers
from RyaApp.models.user import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'nombres', 'apellidos', 'noIdentificacion', 'direccion', 'telefono', 'email']