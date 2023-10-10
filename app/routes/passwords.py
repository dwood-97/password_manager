from flask import Flask, request, jsonify, session
from app.models.password import db, Password
from app.utils.encryption import encrypt, decrypt
from app.utils.session_management import is_user_logged_in

@app.route('/list', methods=['GET'])
def list_passwords():
    if not is_user_logged_in():
        return jsonify({"message": "Unauthorized!"}), 401
    user_id = session['user_id']
    passwords = Password.query.filter_by(user_id=user_id).all()
    return jsonify([password.encrypted_password for password in passwords])

@app.route('/<int:id>', methods=['GET'])
def get_password(id):
    if not is_user_logged_in():
        return jsonify({"message": "Unauthorized!"}), 401
    password = Password.query.get(id)
    if password:
        decrypted_password = decrypt(password.encrypted_password)
        return jsonify({"decrypted_password": decrypted_password})
    return jsonify({"message": "Password not found!"}), 404
