# Generated by Django 2.2.10 on 2020-07-02 15:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('object_detector', '0017_auto_20200702_1512'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='detectormodel',
            name='feature_extractor_type',
        ),
    ]
