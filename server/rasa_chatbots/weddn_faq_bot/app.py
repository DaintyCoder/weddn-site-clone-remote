from quart import Quart, request, jsonify
from quart_cors import cors
from rasa.core.agent import Agent

app = Quart(__name__)
app = cors(app, allow_origin="*")  # Allows all domains, adjust as necessary for production

# Load your trained Rasa model
agent = Agent.load('models/20240516-074757-teal-luminosity.tar.gz')

@app.route('/chat', methods=['POST'])
async def chatbot_response():
    user_message = await request.get_json()
    responses = await agent.handle_text(user_message['message'])
    
    # Check the type of responses and print it for debugging
    print(type(responses), responses)
    
    # Since responses are likely dictionaries or a list of dictionaries, you can directly jsonify them
    return jsonify(responses)

if __name__ == '__main__':
    app.run(debug=True, port=5001)