from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Invitados

from rest_framework import viewsets
from .serializer import InvitadosSerializer

# Create your views here.

def hello(request):
    return (HttpResponse('hola mundo'))

def get_invitados(request):
    invitados = list(Invitados.objects.all())
    return JsonResponse(invitados,safe=False)

class InvitadosView(viewsets.ModelViewSet):
    serializer_class  = InvitadosSerializer
    queryset = Invitados.objects.all()
