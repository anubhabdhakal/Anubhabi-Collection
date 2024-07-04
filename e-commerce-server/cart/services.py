from typing import Any
from django.conf import settings
from rest_framework.exceptions import AuthenticationFailed, ParseError
from .models import Cart
import jwt


class CartServices:

    @staticmethod
    def create_cart(user):
        try:
            cart = Cart.objects.create(user=user)
            cart.save()
            return True
        except Exception as e:
            print(e)
            return False

    @staticmethod
    def get_user_id_from_token(authorization: str) -> int | None:

        try:
            token = authorization.split()[1]
            payload = jwt.decode(token, settings.SECRET_KEY, "HS256")
            if "id" not in payload:
                return None
            return int(payload["id"])
        except jwt.exceptions.InvalidSignatureError:
            raise AuthenticationFailed("Invalid token.")
        except Exception as e:
            print(e)
            raise ParseError("Cannot parse the token.")
