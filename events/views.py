from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from uritemplate import partial
from .serializers import *
from . models import *

# Create your views here.


@api_view(['POST'])
def CreateEvent(request):
        if request.method == "POST":

            serializer = EventSerializer(data=request.data)
            
        if serializer.is_valid():
                
            serializer.save()

        return Response(serializer.data)

@api_view(['POST'])
def OrderEvent(request):
        if request.method == "POST":

            serializer = OrderSerializer(data=request.data)
            
        if serializer.is_valid():
                
            serializer.save()

        return Response(serializer.data)

@api_view(['GET'])
def EventList(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def EventDetail(request, pk):
    event = Event.objects.get(id=pk)
    serializer = EventSerializer(event, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def OrderList(request):
    orders = Order.objects.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)