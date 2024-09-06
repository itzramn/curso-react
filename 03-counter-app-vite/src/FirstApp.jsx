const newMesage = {
  message: "Hola Mundo",
  name: "Itzel",
  age: 22,
  nickname: "itzramn",
};

const getMessage = () => {
  return newMesage.message;
};

export const FirstApp = () => {
  return (
    <>
      <h1>Itzel</h1>
      {/* <code>{JSON.stringify(newMesage)}</code> */}
      <p>Soy un subtitulo</p>
    </>
  );
};
