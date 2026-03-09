from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import UserProfile
from .serializers import UserProfileSerializer, OrderSerializer

@api_view(['POST'])
def register_user(request):
    serializer = UserProfileSerializer(data=request.data)
    if serializer.is_valid(): 
        serializer.save() 
        return Response({
            'success': True,
            'message': 'User registered successfully!'
        }, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    try:
        
        user = UserProfile.objects.get(email=email, password=password)
        return Response({
            "success": True, 
            "message": "Login Successful!",
            "name": user.name
        }, status=status.HTTP_200_OK)
    except UserProfile.DoesNotExist:
        return Response({
            "success": False, 
            "message": "Invalid Email or Password"
        }, status=status.HTTP_401_UNAUTHORIZED)

        
@api_view(['POST'])
def place_order(request):
    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"order placed!" },status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
