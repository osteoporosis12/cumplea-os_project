from django.urls import path, include
from rest_framework import routers
from back_cumple import views
router = routers.DefaultRouter()

router.register(r'back_cumple',views.InvitadosView,'back_cumple')

urlpatterns = [
    path("api/invitados/", include(router.urls))
]
