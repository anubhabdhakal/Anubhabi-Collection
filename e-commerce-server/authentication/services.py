from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from django.conf import settings
from cart.services import CartServices as cs
from .authentication import JWTAuthentication as jwt
from datetime import datetime, timedelta
from typing import Any

login_credentials = {
    "email": '',
    "password": '',
}

User = get_user_model()


class RegisterServices:

    @staticmethod
    def hash_the_password(password: str) -> str:
        return make_password(password=password)

    @staticmethod
    def create_cart_for_user(email):
        try:
            user = User.objects.get(email=email)
            if (not cs.create_cart(user=user)):
                return False
            return True
        except Exception as e:
            print(e)
            return False


class LoginServices:

    @staticmethod
    def check_the_credentials(data: login_credentials) -> bool:

        try:
            user = User.objects.get(email=data["email"].lower())
            return check_password(data["password"], user.password)
        except ObjectDoesNotExist:
            return False
        except Exception:
            return False

    @staticmethod
    def generate_the_token(user: User) -> str:

        expiration_date = int((datetime.now(
        ) + timedelta(days=settings.JWT_CONF["ACCESS_TOKEN_EXPIRATION"])).timestamp())
        payload = {
            "id": user.id,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "username": user.username,
            "is_superuser": user.is_superuser,
            "exp": expiration_date,
            "iat": datetime.now().timestamp()
        }

        return jwt.create_token(payload)
