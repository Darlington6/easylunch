# Generated by Django 5.1.3 on 2024-11-23 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('easylunchapp', '0008_remove_order_email_remove_order_full_name_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='name',
            new_name='product_name',
        ),
        migrations.AlterField(
            model_name='order',
            name='total',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
    ]
