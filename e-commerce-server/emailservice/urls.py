from django.urls import path
from .views import RegistrationEmailVerification

urlpatterns = [
    path("verification-code/", RegistrationEmailVerification.as_view())
]
