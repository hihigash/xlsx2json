import * as XLSX from 'xlsx';
import * as fs from 'fs';

function readExcelToJson(filePath: string): object | { error: string } {
  try {
    // Excelファイルを読み込み
    const workbook = XLSX.readFile(filePath);

    // 最初のワークシートを取得（またはアクティブシートを指定）
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // シートをJSONに変換
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // 結果をコンソールに表示
    console.log(JSON.stringify(jsonData, null, 2));

    return jsonData;
  } catch (error: any) {
    console.error('エラー:', error.message);
    return { error: error.message };
  }
}

// 使用例
const filePath = './input.xlsx';
const result = readExcelToJson(filePath);

// JSONファイルとして保存
fs.writeFileSync('output.json', JSON.stringify(result, null, 2));