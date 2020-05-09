from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializer import UserSerializer, RegisterSerializer

# register api


class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serialier = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=true)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer.context).data,
            "token": AuthToken.objects.create(user)
        })


class UserAPi(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
