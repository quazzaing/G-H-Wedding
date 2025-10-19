from bing_image_downloader import downloader

# Function to search and download images from Bing
def search_and_download(query, limit=5):
    try:
        # Create a downloader instance with the specified arguments.
        downloader_instance = downloader.download(
            query,
            limit=limit,
            output_dir='.',  # Output directory to save the images.
            adult_filter_off=True, 
            force_replace=False, 
            verbose=True,
        )
        print("Images downloaded successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")


import pandas as pd 

df = pd.read_csv("../Tourism.csv")
def download_images(row):
    query = row["Title"] +"  "+ row["Department"]
    search_and_download(query, 1)


df.apply(download_images, axis=1)
# search_and_download(query)  