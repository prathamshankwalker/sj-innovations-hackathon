from rest_framework import serializers
from .models import *

class MlmodelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MLmodel
        fields = "__all__"
