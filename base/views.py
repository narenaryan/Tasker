from django.contrib.auth import get_user_model
from django.http import JsonResponse, HttpResponse
from django.views.generic import View
from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from base.models import Task, Assignment

# Create your views here.

class Home(LoginRequiredMixin, View):
    template_name = "home.html"
    login_url = 'login/'
    def __init__(self, **kwargs):
        pass

    def get(self, request):
        # Only fetch students
        users = get_user_model().objects.filter(is_staff=False)
        if request.user.is_superuser:
            tasks = Task.objects.filter(owner=request.user)
        else:
            tasks = Task.objects.filter(assignments__student=request.user)
        assignments = Assignment.objects.filter(student=request.user)
        return render(request,self.template_name,{'users': users, 'tasks': tasks})

class TaskView(View):
    def post(self, request):
        title = request.POST.get("name")
        description = request.POST.get("description")
        studentID = request.POST.getlist("students[]")
        # Create a new task
        user= request.user
        newTask = Task(title=title, description=description, owner= user)
        newTask.save()
        students = get_user_model().objects.filter(id__in=studentID)
        # For assigned students create assignments
        for student in students:
            assignment = Assignment(student=student)
            assignment.save()
            newTask.assignments.add(assignment)
            newTask.save()
        return JsonResponse({"message": "Successfully Saved!"})

class AssignmentView(View):
    def post(self, request):
        assignmentID = request.POST.get("assignmentID")
        status = request.POST.get("status")
        assignment = Assignment.objects.get(id=int(assignmentID))
        assignment.status = int(status)
        assignment.save()
        return JsonResponse({"message": "Status Successfully Updated!"})
