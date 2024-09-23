from rest_framework import serializers, viewsets
from .models import PruebaText

class PruebaTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = PruebaText
        fields = '__all__'