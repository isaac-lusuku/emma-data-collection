from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
from openpyxl import Workbook
from datetime import datetime
import os

@api_view(['POST'])
def save_data(request):
    try:
        # Get data from the request
        data = request.data

        # Check if the data is empty
        if not data:
            print("No data received or incorrect data format.")
            return JsonResponse(
                {'error': 'No data received or incorrect format.'},
                status=status.HTTP_400_BAD_REQUEST
            )w

        # Print received data for debugging
        print("Received Data:", data)

        # Create a new Excel workbook and select the active worksheet
        wb = Workbook()
        ws = wb.active
        ws.title = "Readings Data"

        # Add headers to the Excel sheet
        headers = ["Item", "Reading 1", "Reading 2"]
        ws.append(headers)

        # Add the received data to the Excel sheet
        for entry in data:
            ws.append([entry['item'], entry['reading1'], entry['reading2']])

        # Create a directory if it doesn't exist
        save_dir = "excel_files"
        if not os.path.exists(save_dir):
            os.makedirs(save_dir)

        # Create a filename with the current timestamp to avoid overwriting files
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        file_name = f"readings_data_{timestamp}.xlsx"
        file_path = os.path.join(save_dir, file_name)

        # Save the Excel file
        wb.save(file_path)

        # Respond with a success message
        return JsonResponse({'message': 'Data saved successfully', 'file': file_name})
    except Exception as e:
        # Print error to console and return error response
        print(f"Error: {str(e)}")
        return JsonResponse(
            {'error': f'An error occurred: {str(e)}'},
            status=status.HTTP_400_BAD_REQUEST
        )
