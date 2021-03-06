/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";

import "../../../style/main.css";
import "../../../style/embedGenerator.css";

import ColorPicker from "../../../components/ColorPicker";
import DiscordMessage from "../../../components/DiscordMessage";

const root = document.documentElement;

function CopyToClipboard(id) {
  var range = document.createRange();
  range.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

function makeId(length) {
  let result = "";
  let characters = "abcdef0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function EmbedGenerator() {
  const [noEmbedMessage, setNoEmbedMessage] = React.useState("");
  const [embedTitle, setEmbedTitle] = React.useState("");
  const [embedTitleUrl, setEmbedTitleUrl] = React.useState("");
  const [embedDescription, setEmbedDescription] = React.useState("");
  const [embedAuthorName, setEmbedAuthorName] = React.useState("");
  const [embedAuthorIconUrl, setEmbedAuthorIconUrl] = React.useState("");
  const [embedAuthorUrl, setEmbedAuthorUrl] = React.useState("");
  const [embedImageUrl, setEmbedImageUrl] = React.useState("");
  const [embedThumbnailUrl, setEmbedThumbnailUrl] = React.useState("");
  const [embedFooterText, setEmbedFooterText] = React.useState("");
  const [embedFooterTime, setEmbedFooterTime] = React.useState("");
  const [embedFooterIcon, setEmbedFooterIcon] = React.useState("");
  const [embedFieldCount, setEmbedFieldCount] = React.useState(0);
  const [embedFields, setEmbedFields] = React.useState([]);

  const [outputType, setOutputType] = React.useState("XilerMessage");

  return (
    <div id="EmbedGenerator">
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      ></link>
      <main itemScope>
        <div id="inputs">
          <h4>Un embedded:</h4>
          <textarea
            name="noEmbed"
            id="noEmbed"
            onChange={(event) => setNoEmbedMessage(event.target.value)}
            defaultValue={noEmbedMessage}
            placeholder="This content will not be embedded"
          />
          <h4>Embed:</h4>
          <div className="title">
            <input
              type="text"
              name="embedTitle"
              id="embedTitle"
              onChange={(event) => setEmbedTitle(event.target.value)}
              defaultValue={embedTitle}
              placeholder="Embed title"
            />
            <ColorPicker item="--embed-color" />
          </div>
          <input
            type="text"
            name="embedUrl"
            id="embedUrl"
            onChange={(event) => setEmbedTitleUrl(event.target.value)}
            defaultValue={embedTitleUrl}
            placeholder="Embed title url"
          />
          <textarea
            name="embedContent"
            id="embedContent"
            onChange={(event) => setEmbedDescription(event.target.value)}
            defaultValue={embedDescription}
            placeholder="Your main embed content"
          />
          <h5>Author:</h5>
          <input
            type="text"
            name="authorName"
            id="authorName"
            onChange={(event) => setEmbedAuthorName(event.target.value)}
            defaultValue={embedAuthorName}
            placeholder="Author Name"
          />
          <input
            type="text"
            name="authorIconUrl"
            id="authorIconUrl"
            onChange={(event) => setEmbedAuthorIconUrl(event.target.value)}
            defaultValue={embedAuthorIconUrl}
            placeholder="Author icon url"
          />
          <input
            type="text"
            name="authorUrl"
            id="authorUrl"
            onChange={(event) => setEmbedAuthorUrl(event.target.value)}
            defaultValue={embedAuthorUrl}
            placeholder="Author url"
          />
          <h5>Images:</h5>
          <input
            type="text"
            name="imageURL"
            id="imageURL"
            onChange={(event) => setEmbedImageUrl(event.target.value)}
            defaultValue={embedImageUrl}
            placeholder="Image URL"
          />
          <input
            type="text"
            name="thumbnailURL"
            id="thumbnailURL"
            onChange={(event) => setEmbedThumbnailUrl(event.target.value)}
            defaultValue={embedThumbnailUrl}
            placeholder="Thumbnail URL"
          />
          <h5>Footer:</h5>
          <input
            type="text"
            name="footerText"
            id="footerText"
            onChange={(event) => setEmbedFooterText(event.target.value)}
            defaultValue={embedFooterText}
            placeholder="Footer text"
          />
          <input
            type="text"
            name="footerIcon"
            id="footerIcon"
            onChange={(event) => setEmbedFooterIcon(event.target.value)}
            defaultValue={embedFooterIcon}
            placeholder="Footer icon url"
          />
          <input
            type="datetime-local"
            name="footerTime"
            id="footerTime"
            onChange={(event) => setEmbedFooterTime(event.target.value)}
            defaultValue={embedFooterTime}
            min="1971-01-01"
            max="9999-12-30"
          />
          <h5>Fields: ({embedFieldCount}/25)</h5>
          <div className="fieldVote">
            <button
              onClick={() => {
                if (parseInt(embedFieldCount) < 25) {
                  setEmbedFields([
                    ...embedFields,

                    {
                      inline: 0,
                      name: "",
                      value: "",
                      index: embedFieldCount,
                    },
                  ]);
                  return setEmbedFieldCount(parseInt(embedFieldCount) + 1);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
              >
                <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
              </svg>
            </button>
            <button
              onClick={() => {
                if (parseInt(embedFieldCount) > 0) {
                  let _data = embedFields;
                  _data.splice(embedFieldCount - 1, 1);
                  setEmbedFields(_data);
                  return setEmbedFieldCount(parseInt(embedFieldCount) - 1);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
              >
                <path d="M0 9h24v6h-24z" />
              </svg>
            </button>
          </div>
          {embedFields && (
            <div className="field-props">
              {embedFields.map((field, index) => (
                <div key={index} className="field-props-wrapper">
                  <input
                    type="text"
                    name={`field${index + 1}-name`}
                    id={`field${index + 1}-name`}
                    onChange={(event) => {
                      let _data = embedFields.slice();
                      _data[index].name = event.target.value;
                      return setEmbedFields(_data);
                    }}
                    defaultValue={field.name}
                    placeholder={`The name for the ${index + 1}'th field`}
                  />
                  <input
                    className="check"
                    type="checkbox"
                    name={`field${index + 1}-inline`}
                    id={`field${index + 1}-inline`}
                    onChange={(event) => {
                      let _data = embedFields.slice();
                      _data[index].inline = event.target.checked ? 1 : 0;
                      return setEmbedFields(_data);
                    }}
                    defaultValue={field.name}
                  />
                  <label htmlFor={`field${index + 1}-inline`}>inline</label>
                  <textarea
                    type="text"
                    name={`field${index + 1}-value`}
                    id={`field${index + 1}-value`}
                    onChange={(event) => {
                      let _data = embedFields.slice();
                      _data[index].value = event.target.value;
                      return setEmbedFields(_data);
                    }}
                    defaultValue={field.value}
                    placeholder={`The value for the ${index + 1}'th field`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <h3>Preview:</h3>
        <div id="preview">
          <DiscordMessage
            sender={{
              icon: "/assets/logoUsable-64x.png",
              name: "Xiler",
              isBot: true,
              date: new Date(),
            }}
            message={{
              noEmbed: noEmbedMessage,
              embed: {
                color: "#4f545c",
                author: {
                  icon: embedAuthorIconUrl,
                  name: embedAuthorName,
                  url: embedAuthorUrl,
                },
                title: {
                  text: embedTitle,
                  url: embedTitleUrl,
                },
                fields: embedFields,
                description: embedDescription,
                image: embedImageUrl,
                thumbnail: embedThumbnailUrl,
                footer: {
                  text: embedFooterText,
                  date: embedFooterTime,
                  icon: embedFooterIcon,
                },
              },
            }}
          />
        </div>
        <div id="output">
          <h3>Output:</h3>
          <ul>
            <li>
              <button
                onClick={() => {
                  return setOutputType("XilerMessage");
                }}
              >
                Xiler Message
              </button>
            </li>
            <li>
              <button onClick={() => setOutputType("JSON")}>JSON</button>
            </li>
            <li className="copy">
              <button onClick={() => CopyToClipboard("output-data-wrapper")}>
                Copy
              </button>
            </li>
          </ul>
          <div id="output-data">
            <div id="output-data-wrapper">
              {outputType === "XilerMessage" && (
                <React.Fragment>
                  XilerMessage-{makeId(4)}.{makeId(8)}|{"{"}
                  {noEmbedMessage && <p>content-[{noEmbedMessage}],</p>}
                  {embedDescription && (
                    <React.Fragment>
                      {embedTitle && <p>title-[{embedTitle}],</p>}
                      <p>
                        color-[{root.style.getPropertyValue("--embed-color")}],
                      </p>
                      {embedDescription && (
                        <p>description-[{embedDescription}],</p>
                      )}
                      {embedTitleUrl && <p>url-[{embedTitleUrl}],</p>}
                      {embedAuthorName && (
                        <div className="out-sub-obj">
                          author|{"{"}
                          {embedAuthorName && <p>name-[{embedAuthorName}],</p>}
                          {embedAuthorIconUrl && (
                            <p>icon_url-[{embedAuthorIconUrl}],</p>
                          )}
                          {embedAuthorUrl && <p>url-[{embedAuthorUrl}],</p>}
                          {"}"}
                        </div>
                      )}
                      {embedThumbnailUrl && (
                        <p>thumbnail_url-[{embedThumbnailUrl}],</p>
                      )}
                      {embedImageUrl && <p>image_url-[{embedImageUrl}],</p>}
                      {(embedFooterText || embedFooterTime) && (
                        <div className="out-sub-obj">
                          footer|{"{"}
                          {embedFooterText && <p>text-[{embedFooterText}],</p>}
                          {embedFooterTime && (
                            <p>timestamp-[{embedFooterTime}],</p>
                          )}
                          {embedFooterIcon && (
                            <p>icon_url-[{embedFooterIcon}],</p>
                          )}
                          {"}"}
                        </div>
                      )}
                      {embedFields && (
                        <div className="out-sub-obj">
                          fields-[
                          {embedFields.map((field, index) => (
                            <React.Fragment key={index}>
                              {(field.value || field.name) && (
                                <div key={index} className="out-sub-obj">
                                  field|{"{"}
                                  {field.name && <p>name-[{field.name}],</p>}
                                  {field.value && <p>value-[{field.value}],</p>}
                                  <p>inline-[{field.inline}],</p>
                                  {"}"}
                                </div>
                              )}
                            </React.Fragment>
                          ))}
                          ]
                        </div>
                      )}
                    </React.Fragment>
                  )}
                  {"}"}
                </React.Fragment>
              )}
              {outputType === "JSON" && (
                <React.Fragment>
                  {"{"}
                  {noEmbedMessage && <p>"content": "{noEmbedMessage}"</p>}
                  {embedDescription && (
                    <div className="out-sub-obj json">
                      "embed": {"{"}
                      <div className="out-sub-obj json">
                        {embedTitle && <p>"title": "{embedTitle}"</p>}
                        {embedDescription && (
                          <p>"description": "{embedDescription}"</p>
                        )}
                        {embedTitleUrl && <p>"url": "{embedTitleUrl}"</p>}
                        {embedAuthorName && (
                          <React.Fragment>
                            "author": {"{"}
                            <div className="out-sub-obj json">
                              <p>"name": "{embedAuthorName}"</p>
                              <p>"icon_url": "{embedAuthorIconUrl}"</p>
                              <p>"url": "{embedAuthorUrl}"</p>
                            </div>
                            {"}\n"}
                          </React.Fragment>
                        )}
                        {embedThumbnailUrl && (
                          <React.Fragment>
                            "thumbnail": {"{"}
                            <div className="out-sub-obj json">
                              <p>"url": "{embedThumbnailUrl}"</p>
                            </div>
                            {"}\n"}
                          </React.Fragment>
                        )}
                        {embedImageUrl && (
                          <React.Fragment>
                            "image": {"{"}
                            <div className="out-sub-obj json">
                              <p>"url": "{embedImageUrl}"</p>
                            </div>
                            {"}\n"}
                          </React.Fragment>
                        )}
                        {embedFooterText && (
                          <React.Fragment>
                            "footer": {"{"}
                            <div className="out-sub-obj json">
                              <p>"text": "{embedFooterText}"</p>
                              <p>"icon_url": "{embedFooterIcon}"</p>
                            </div>
                            {"}\n"}
                          </React.Fragment>
                        )}
                        {embedFooterTime && (
                          <p>"timestamp": "{embedFooterTime}"</p>
                        )}
                        {embedFields && (
                          <React.Fragment>
                            "fields": [
                            {embedFields.map((field, index) => (
                              <React.Fragment key={index}>
                                {(field.name || field.value) && (
                                  <div className="out-sub-obj json">
                                    {"{"}
                                    <div className="out-sub-obj json">
                                      <p>"name": "{field.name}"</p>
                                      <p>"value": "{field.value}"</p>
                                      <p>
                                        "inline":{" "}
                                        {field.inline === 1 ? "true" : "false"}
                                      </p>
                                    </div>
                                    {"}\n"}
                                  </div>
                                )}
                              </React.Fragment>
                            ))}
                            ]
                          </React.Fragment>
                        )}
                      </div>
                      {"}\n"}
                    </div>
                  )}
                  {"}\n"}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EmbedGenerator;
