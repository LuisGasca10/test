from django.shortcuts import render
from rest_framework import viewsets
from .models import PruebaText
from .serializers import PruebaTextSerializer

# Create your views here
class PruebaView(viewsets.ModelViewSet):
    queryset = PruebaText.objects.all()
    serializer_class = PruebaTextSerializer

