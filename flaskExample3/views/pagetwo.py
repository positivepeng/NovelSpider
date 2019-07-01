import json
from flask import Flask, render_template, request, Blueprint, jsonify
from config import db
from modes.mode import Product, User

nameAnalysis = Blueprint('web2', __name__)