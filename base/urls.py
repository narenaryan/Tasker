"""tasker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from base.views import Home, TaskView, AssignmentView
from django.contrib.auth import views
from base.forms import LoginForm

urlpatterns = [
    url(r'^$', Home.as_view(), name='home'),
    url(r'^login/', views.login, {'template_name': 'login.html', 'authentication_form': LoginForm}),
    url(r'^logout/$', 'django.contrib.auth.views.logout',
                          {'next_page': '/'}),
    url(r'^task/$', TaskView.as_view(), name='task'),
	url(r'^assign/$', AssignmentView.as_view(), name='assign'),
]
