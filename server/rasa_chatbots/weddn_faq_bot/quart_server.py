from quart import Quart, request, jsonify
from quart_cors import cors
from rasa.core.agent import Agent
from rasa.utils.endpoints import EndpointConfig
import asyncio

app = Quart(__name__)
app = cors(app, allow_origin="http://localhost:3000")  # Update with your React app's URL

# Load the Rasa agent with your model
model_path = 'models/20240516-074757-teal-luminosity.tar.gz'
agent = Agent.load(model_path, action_endpoint=EndpointConfig(url="http://localhost:5055/webhook"))

@app.route('/webhooks/rest/webhook', methods=['POST'])
async def webhook():
    user_message = await request.get_json()
    sender_id = user_message.get('sender')
    message = user_message.get('message')

    responses = await agent.handle_text(message, sender_id=sender_id)
    return jsonify(responses)

if __name__ == '__main__':
    app.run(port=5001)
