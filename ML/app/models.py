from django.db import models


class MLmodel(models.Model):
    gender = models.BooleanField()
    wfh = models.BooleanField()
    desig = models.FloatField()
    no_of_hrs = models.FloatField()
    fatigue_score = models.FloatField()
