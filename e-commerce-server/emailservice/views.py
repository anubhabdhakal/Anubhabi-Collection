from django.conf import settings
from django.core.mail import BadHeaderError, send_mail
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from utils.response import CustomResponse as cr

from .services import createEncryptedKey, getRandomCode

# Create your views here.


class RegistrationEmailVerification(APIView):
    authentication_classes = []

    def post(self, request: Request) -> Response:

        try:
            email_to_register = request.data["email"]
            digits = 6
            random_verification_code = getRandomCode(digits=digits)

            mail_subject = f"Here's your verification code {random_verification_code}"

            mail_message = f"Enter the {digits} digits code to verify your identity and gain access to your account. {random_verification_code}"
            email_host_user = settings.EMAIL_HOST_USER

            try:
                send_mail(
                    subject=mail_subject,
                    message=mail_message,
                    from_email=email_host_user,
                    recipient_list=[email_to_register],
                )
                print("sending")
                # code = createEncryptedKey(random_verification_code)
                return cr.success(
                    data=random_verification_code,
                    message="Verfification code in encrypted form.",
                )
            except BadHeaderError:
                return cr.error(message="Bad header error while ending mail.")
        except Exception as e:
            print(e)
            return cr.error(
                message="Error while sending the verfication code via email."
            )
