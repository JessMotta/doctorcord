import { useRouter } from "next/router";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";

function Title(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals["000"]};
            font-size: 68px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
}

export default function Error() {
  const route = useRouter();
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[600],
          backgroundImage: "url(https://i.postimg.cc/Ls3kmYG8/exterminate.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
       
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            padding: "32px",
            margin: "16px",
          }}
        >
          <Image
            styleSheet={{
              height: "70%",
              margin:"30px",
            }}
            src="https://i.postimg.cc/rwmKYhLj/dalek1.png"
          />
          <Box
          styleSheet={{
            display: "inline-block",
            width: "100%",
            padding: "32px",
            margin: "16px",
          }}
        >
        <Title>404 Exterminaaaate!!!</Title>
      
        <Button
              type="onClick"
              label="Voltar"
              fullWidth
              marginTop="30px"
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[600],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[700],
              }}
              onClick={
                  function(event){
                      route.push("/")
                  }
              }
            />
         </Box>

        </Box>
      </Box>
    </>
  );
}
