import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  console.log('lleo')
  console.log(data)

  return data;
}

export async function createCabin(newCabin) {
  
  const hasImagePath=newCabin.image??startsWith(supabaseUrl);
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath?newCabin.image:`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
 
  const {data,error}=await supabase.from('cabins').insert([{
    ...newCabin,image:imagePath
  }])


 
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
  if(hasImagePath) return data;

  const {error:storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
   
    if(storageError){
        await supabase.from("cabins").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error("Cabin image could not be uploaded and the cabin could not be created");
    }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
