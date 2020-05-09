from rest_framework import serializers
from .models import Lead

# Lead serializer


class LeadSerialier(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
