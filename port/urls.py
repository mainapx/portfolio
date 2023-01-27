"""port URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,re_path
from portfolio import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/api/new',views.PortFolioRegisterHandler.as_view()),
    path('user/api/login',views.PortFolioLoginHandler.as_view()),
    path('user/api/logout',views.PortFolioLogoutHandler.as_view()),
    path("admin",views.PortFolioAdminHandler.as_view()),
    #rest api urls
    path("task-api",views.Testing),
    path("postdata",views.Postdata),
    path("new",views.PortFolioNewHandler.as_view()),
    re_path(r'^(?:.*)/?$',views.PortFolioIndexHandler.as_view())
]
