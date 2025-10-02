First, all spaces are removed from the input string. The total length of the cleaned string is counted.
The program calculates the number of rows and columns by taking the square root of the length (rounding down for rows and up for columns).
If rows × columns is still too small to fit the string, the number of rows is increased by one.
The program then reads the string column by column, building smaller words from each column.
Each word is added to a result list.
Finally, the words are joined together with spaces and returned as the encrypted message.