import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";

function Title(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals["050"]};
            font-size: 24px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
}

export default function PaginaInicial() {
  // const username = "jessmotta";
  // const [userGit, setUserGit] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userLocation, setUserLocation] = React.useState();

  const route = useRouter();
  // const gitUserURL = `https://api.github.com/users/${username}`;

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${username}`).then(async (response) => {
      let userData = await response.json();
      const userLocation = userData.location;
      const userName = userData.name;
      setUserLocation(userLocation);
      setUserName(userName);
    });
  });
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[300],
          backgroundImage: "url(https://i.postimg.cc/5NX50Qf9/Background.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.primary[900],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (event) {
              event.preventDefault();
              console.log("Alguem submeteu o form");
              {
                username.length > 2 ? route.push("/chat") : route.push("/404");
              }
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Title tag="h2">ALLONZ-Y!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              value={username}
              onChange={function (event) {
                setUsername(event.target.value);

                // if (event.target.value.length > 2) {
                //   fetch(gitUserURL)
                //     .then((resp) => resp.json())
                //     .then((data) => {
                //       console.log(data)
                //       // setUserLogin(data.login);
                //       // setUserLocation(data.location);
                //     });

                // }
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[200],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.primary[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[600],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[700],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.primary[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.primary[800],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={
                username.length > 2
                  ? `https://github.com/${username}.png`
                  : `https://i.postimg.cc/SRRNJ3sv/invalid-User.jpg`
              }
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.primary[200],
                backgroundColor: appConfig.theme.colors.primary[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username.length > 2 ? "userLogin" : "Doctor Who?"}
            </Text>
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.primary[200],
                backgroundColor: appConfig.theme.colors.primary[900],
                padding: "3px 10px",
                borderRadius: "1000px",
                marginTop: "10px",
              }}
            >
              {username.length > 2 ? userLocation : "Gallifrey"}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
