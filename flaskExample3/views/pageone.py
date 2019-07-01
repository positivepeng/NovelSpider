import json
from flask import Flask, render_template, request, Blueprint, jsonify
from config import db
from modes.mode import Product, User

bookRank = Blueprint('web1', __name__)