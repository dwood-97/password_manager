from flask import Flask, request, jsonify, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash
from app.models.user import db, User
from app.utils.session_management import set_user_session, is_user_logged_in

@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    password = request.form['password']
    hashed_password = generate_password_hash(password, method='sha256')
    new_user = User(username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully!"})

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        set_user_session(user.id)
        return jsonify({"message": "Login successful!"})
    return jsonify({"message": "Invalid credentials!"}), 401

@app.route('/logout', methods=['GET'])
def logout():
    if not is_user_logged_in(): 
        return redirect(url_for('login'))
    from app.utils.session_management import clear_session
    clear_session()
    return redirect(url_for('login'))
