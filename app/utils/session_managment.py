from flask import session

def set_user_session(user_id):
    session['user_id'] = user_id

def clear_session():
    session.pop('user_id', None)

def is_user_logged_in():
    return 'user_id' in session