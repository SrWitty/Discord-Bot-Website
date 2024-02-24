import React from 'react';

const Commands = () => {
  return (
    <div className="container text-white p-8 rounded-lg shadow-lg animate-fade-in" style={{ backgroundColor: '#28293A', marginTop: '-1.5rem' }}>
      <div>
        <h1 className="text-center text-3xl font-bold mb-6">Bot Commands</h1> {/* تم تصغير النص وجعل الخط عريضًا */}
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">List of Commands:</h2> {/* تم تصغير النص وجعل الخط عريضًا */}
          <ul className="list-disc list-inside text-sm"> {/* تم تصغير النص في القائمة */}
            <li className="mb-2">
              <strong className="font-bold">!help</strong> - Display a list of available commands.
            </li>
            <li className="mb-2">
              <strong className="font-bold">!info</strong> - Get information about the bot.
            </li>
            <li className="mb-2">
              <strong className="font-bold">!play [song]</strong> - Play a song in the voice channel.
            </li>
            {/* Add more commands as needed */}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Examples:</h2> {/* تم تصغير النص وجعل الخط عريضًا */}
          <p>Here are some examples of how to use the bot commands:</p>
          <ul className="list-disc list-inside text-sm"> {/* تم تصغير النص في القائمة */}
            <li className="mb-2">
              <strong className="font-bold">!play Despacito</strong> - Play the song "Despacito" in the voice channel.
            </li>
            <li className="mb-2">
              <strong className="font-bold">!info</strong> - Retrieve information about the bot.
            </li>
            {/* Add more examples as needed */}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">How to Use the Bot in Your Server:</h2> {/* تم تصغير النص وجعل الخط عريضًا */}
          <p>Follow these steps to utilize the bot in your server:</p>
          <ol className="list-decimal list-inside text-sm"> {/* تم تصغير النص في القائمة */}
            <li className="mb-2">
              <strong className="font-bold">Invite the bot to your server</strong> using the invite link provided by the bot creator.
            </li>
            <li className="mb-2">
              <strong className="font-bold">Make sure the bot has the necessary permissions</strong> to read messages, join voice channels, etc.
            </li>
            <li className="mb-2">
              <strong className="font-bold">Use the commands in the text channels</strong> to interact with the bot.
            </li>
            {/* Add more instructions as needed */}
          </ol>
        </section>
      </div>

      {/* Footer can be added here */}
    </div>
  );
};

export default Commands;
