from django.db import models

# Create your models here.

class Invitados(models.Model):
    name = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    parnerts = models.IntegerField(default = 0)