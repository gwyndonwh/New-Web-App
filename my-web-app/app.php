
            <h1>Agent Keycard Creation</h1>

            <form id="keyForm" action="#" onsubmit="return false">
                    <input required type="text" name="name" placeholder="Name">
                    <input required type="text" name="secretName" maxlength="16" placeholder="Code Name">
                    <input required type="url"  name="photoUrl" size="50"
                    placeholder=" Agent Photo  (right click Image -> copy image location) ">
                    <input type="submit" onclick="compileCard()" value="Generate Keycard">
                    <input type="reset" value="Clear Form">
            </form>

            <div id="template">

                <div id="cardInfo">
                    <p></p>
                    <p></p>
                </div>

                <div id="photo"></div>
                <img src="images/template.jpeg">
            </div>

            <div id="load">
                <h2>Load Agent Card</h2>
                <select name="cards">
                    <option value="0" href="#">Blank Card</option>
                </select>
                <button id="loadAgent" onclick="loadCard(agents[optContainer.value])">Load</button>
            </div>
