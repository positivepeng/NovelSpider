import json
from flask import Flask, render_template, request, Blueprint, jsonify
from config import db
from modes.mode import Product, User

homoAnalysis = Blueprint('web3', __name__)