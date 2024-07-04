from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST


class CustomResponse:

    @staticmethod
    def success(data='', message='Successful', status_code=HTTP_200_OK):
        return Response({
            "success": True,
            "data": data,
            "message": message
        },
            status=status_code)

    @staticmethod
    def error(data='', message='Unsuccessful', status_code=HTTP_400_BAD_REQUEST):
        return Response({
            "success": False,
            "data": data,
            "message": message
        },
            status=status_code)
