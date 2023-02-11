from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework import status
from .serializers import *
from .utils import get_predictions

# Gender,WFH,Designation,Resource_Allocation,Mental_Fatigue_Score
@api_view(["POST"])
def ml_stuff(request):
    try:
        ser = MlmodelSerializer(data=request.data)
        if ser.is_valid():
            res = get_predictions(ser.data["gender"], ser.data["wfh"], ser.data["desig"], ser.data["no_of_hrs"], ser.data["fatigue_score"])
            return Response({"Burnout Rate": res}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
