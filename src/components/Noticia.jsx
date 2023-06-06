import 
{ Card, CardActions, CardContent,
 CardMedia, Link, Typography, Grid } from "@mui/material"

const Noticia = ({noticia}) => {

  const { urlToImage, url, title, description, source } = noticia;

  return (
    <Card>
      <CardMedia 
        component="img"
        alt={`Imagen de la noticia ${title}`}
        image={urlToImage}
      />
    </Card>
  )
}

export default Noticia