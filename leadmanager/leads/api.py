from .models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerialier


class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerialier

    def get_queryset(self):
        print(self)
        return self.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
