from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import HTTP_201_CREATED, HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from utils.response import CustomResponse as cr
from .serializer import CartSerializer
from .models import Cart
from .services import CartServices as cs
import json
# Create your views here.


class CartAPIView (APIView):
    serializer_class = CartSerializer
    query_set = Cart.objects.all()
    permission_classes = [IsAuthenticated]

    def get(self, request: Request) -> Response:
        try:
            user_id = cs.get_user_id_from_token(
                request.headers["Authorization"])

            if not user_id:
                return cr.error(message="Cannot find the user.")

            instance = Cart.objects.filter(user=user_id).first()
            serializer = self.serializer_class(instance)
            return cr.success(data=json.loads(json.dumps(serializer.data)), message="Successfully fetched all the cart products.", status_code=HTTP_201_CREATED)
        except Exception as e:
            return cr.error(message="Error while getting all the cart products")

    def patch(self, request: Request) -> Response:

        try:
            user_id = cs.get_user_id_from_token(
                request.headers["Authorization"])

            if not user_id:
                return cr.error(message="Cannot find the user.")

            instance = Cart.objects.prefetch_related(
                "product").filter(user=user_id).first()
            serializer = self.serializer_class(
                data=request.data,)
            serializer.is_valid(raise_exception=True)
            serializer.update(instance, serializer.validated_data)
            return cr.success(message="Successfully Updated the cart.", status_code=HTTP_201_CREATED)
        except ValidationError:
            return cr.error(data=json.loads(json.dumps(serializer.errors)))
        except Exception as e:
            print(e)
            return cr.error()
