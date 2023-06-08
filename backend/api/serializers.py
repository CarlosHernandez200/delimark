from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from api.models import User


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token
    """

    def validate(self, attrs):
        data = super().validate(attrs)
        # data['user_id'] = self.user.id
        data['username'] = self.user.username
        return data


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        validated_data['password'] = make_password(password)
        instance = self.Meta.model.objects.create(**validated_data)
        return instance