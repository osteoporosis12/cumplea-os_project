from rest_framework import serializers
from .models import Invitados

class InvitadosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invitados
        fields = '__all__'