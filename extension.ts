import * as vscode from 'vscode';
import * as os from 'os';
import * as path from 'path';
let myvar = 1;

export function activate(context: vscode.ExtensionContext) {
	// Comando para alternar myvar con tecla "m"
	const toggleCommand = vscode.commands.registerCommand('myExtension.toggleMyVar', () => {
		
		if (myvar === 1 || myvar ===5) {
			myvar = 0;
		}else{
			myvar = 1;
		}
		vscode.window.setStatusBarMessage(`myvar = ${myvar}`, 1000);
	});
	const mCommand = vscode.commands.registerCommand('myExtension.mCommand', () => {
	
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
		
			const selections = editor.selections;

			for (const selection of selections) {
			
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'm');
				} else if (myvar === 1) {
					vscode.commands.executeCommand('actions.find');
			    } else if (myvar === 4) {
					vscode.commands.executeCommand('actions.find');
					myvar = 1 ;
				}else if (myvar === 3) {
					editBuilder.insert(position, '!');
					myvar = 0;
				}else if (myvar === 5) {
					editBuilder.insert(position, '1');
				}
			}
		});
	});
	// Comando para insertar según el valor de myvar con tecla "n"
	const yCommand = vscode.commands.registerCommand('myExtension.yCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'y');
				} else if (myvar === 1) {
					myvar = 2;
					vscode.window.setStatusBarMessage(`myvar = ${myvar}`, 1000);


				}else if (myvar === 3) {
					editBuilder.insert(position, '\\');
					myvar = 0;
				}
			}
		});
	});
const kCommand = vscode.commands.registerCommand('myExtension.kCommand', () => {

		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
		
			const selections = editor.selections;

			for (const selection of selections) {
			
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'k');
				} else if (myvar === 1) {
					vscode.commands.executeCommand('cursorWordRight');
				}else if (myvar === 2) {
					vscode.commands.executeCommand('cursorEnd');
				}else if (myvar === 4) {	
					vscode.commands.executeCommand('cursorWordRightSelect');
						
				} if (myvar === 3) {
					editor.edit(editBuilder => {
					editBuilder.insert(position, '\'\'');
					}).then(() => {
						vscode.commands.executeCommand('cursorLeft');
					});
					myvar = 1;
				}else if (myvar === 5) {
					editBuilder.insert(position, '7');
     			}
			}
		});
	});
const jCommand = vscode.commands.registerCommand('myExtension.jCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'j');
				} else if (myvar === 1) {
					vscode.commands.executeCommand('cursorWordLeft');
				}else if (myvar === 2) {
					vscode.commands.executeCommand('cursorHome');
				}else if (myvar === 4) {	
					vscode.commands.executeCommand('cursorWordLeftSelect');
						
				}else if (myvar === 3) {
					editBuilder.insert(position, '+');
					myvar = 0;
				}else if (myvar === 5) {
					editBuilder.insert(position, '8');
     			}
		}
		});
	});
	const lCommand = vscode.commands.registerCommand('myExtension.lCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'l');
				} else if (myvar === 1) {
					vscode.commands.executeCommand('cursorDown');
				}else if (myvar === 2) {
					vscode.commands.executeCommand('editor.action.nextSelectionMatchFindAction');
				}else if (myvar === 4) {
					vscode.commands.executeCommand('cursorDownSelect');
				}else if (myvar === 3) {
				editor.edit(editBuilder => {
					editBuilder.insert(position, '""');
					}).then(() => {
						vscode.commands.executeCommand('cursorLeft');
					});
					myvar = 0;
				}else if (myvar === 5) {
					editBuilder.insert(position, '0');
     			}
			}
		});
	});
	const gCommand = vscode.commands.registerCommand('myExtension.gCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'g');
				} else if (myvar === 1) {
					vscode.commands.executeCommand('cursorUp');
				}else if (myvar === 4) {
					vscode.commands.executeCommand('cursorUpSelect');
				} else if (myvar === 3) {
					editBuilder.insert(position, '|');
					myvar = 0;
				} else if (myvar === 2) {
					vscode.commands.executeCommand('editor.action.previousMatchFindAction');
				}else if (myvar === 5) {
					editBuilder.insert(position, '9');
     			} 
			}
		});
	});
const oCommand = vscode.commands.registerCommand('myExtension.oCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'o');
				} else if (myvar === 1) {
					vscode.commands.executeCommand('cursorLeft');
				}else if (myvar === 4) {
					vscode.commands.executeCommand('cursorLeftSelect');
				}else if (myvar === 3) {
				editor.edit(editBuilder => {
					editBuilder.insert(position, '{}');
					}).then(() => {
						vscode.commands.executeCommand('cursorLeft');
					});
					myvar = 0;
				}else if (myvar === 5) {
					editBuilder.insert(position, '6');
     			}
			}
		});
	});
const pCommand = vscode.commands.registerCommand('myExtension.pCommand', () => {

		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
		
			const selections = editor.selections;

			for (const selection of selections) {
			
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'p');
				} else if (myvar === 1) {
					vscode.commands.executeCommand('cursorRight');
				}else if (myvar === 4) {
					vscode.commands.executeCommand('cursorRightSelect');
				}else if (myvar === 3) {
				
				editor.edit(editBuilder => {
					editBuilder.insert(position, '()');
					}).then(() => {
						vscode.commands.executeCommand('cursorLeft');
					});
					myvar = 0;
				}else if (myvar === 5) {
					editBuilder.insert(position, '5');
     			}else if (myvar === 2) {
     			editor.edit(editBuilder => {
					// Inserta 3 espacios después del cursor
					editBuilder.insert(position, '   ');
					// Inserta 3 espacios antes del cursor
					const beforePos = position.translate(0, 0);
					editBuilder.insert(beforePos, '   ');
					}).then(() => {
						// Mueve el cursor al medio (después de los 3 primeros espacios)
						const newPos = position.translate(0, 3);
						editor.selection = new vscode.Selection(newPos, newPos);
					});
					myvar = 5;
					vscode.window.setStatusBarMessage(`myvar = ${myvar}`, 1000);
								
     			}
	
			}
		});
	});
const cCommand = vscode.commands.registerCommand('myExtension.cCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'c');
				} else if (myvar === 1) {
					vscode.commands.executeCommand('editor.unfold');
				}else if (myvar === 5) {
					const document = editor.document;
					const cursorPos = editor.selection.active;

					// Obtener el rango de la palabra bajo el cursor
					const wordRange = document.getWordRangeAtPosition(cursorPos);
					if (!wordRange) return;

					// Expandir el rango 3 caracteres a la izquierda y derecha
					const start = wordRange.start.translate(0, -3);
					const end = wordRange.end.translate(0, 3);
					const deleteRange = new vscode.Range(start, end);
					const palabra = document.getText(deleteRange);
					editBuilder.delete(deleteRange);
				    const n = Number(palabra);

					if (isNaN(n)) {
					vscode.window.showErrorMessage("⚠️ Entrada inválida");
					return;
					}

					const newSelections = editor.selections.map(sel => {
					const newPos = sel.active.translate(n, 0);
					return new vscode.Selection(newPos, newPos);
					});
					editor.selections = newSelections;

					myvar = 1;
				}else if (myvar === 3) {
					editBuilder.insert(position, '<');
					myvar = 0;
				} 
			}
		});
	});
const xCommand = vscode.commands.registerCommand('myExtension.xCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'x');
				} else if (myvar === 1) {
					vscode.commands.executeCommand('editor.fold');
				}else if (myvar === 5) {
				    const document = editor.document;
					const cursorPos = editor.selection.active;

					// Obtener el rango de la palabra bajo el cursor
					const wordRange = document.getWordRangeAtPosition(cursorPos);
					if (!wordRange) return;

					// Expandir el rango 3 caracteres a la izquierda y derecha
					const start = wordRange.start.translate(0, -3);
					const end = wordRange.end.translate(0, 3);
					const deleteRange = new vscode.Range(start, end);
					const palabra = document.getText(deleteRange);
					editBuilder.delete(deleteRange);
					
				    const n = Number(palabra);

					if (isNaN(n)) {
					vscode.window.showErrorMessage("⚠️ Entrada inválida");
					return;
					}

					const newSelections = editor.selections.map(sel => {
					const newPos = sel.active.translate(-n, 0);
					return new vscode.Selection(newPos, newPos);
					});
					editor.selections = newSelections;

					myvar = 1;
				} else if (myvar === 3) {
					editBuilder.insert(position, '/');
					myvar = 0;
				} 
			}
		});
	});
	const fCommand = vscode.commands.registerCommand('myExtension.fCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'f');
				} else if (myvar === 1) {
					vscode.commands.executeCommand('editor.fold');
				}else if (myvar === 2) {
					vscode.commands.executeCommand('cursorHome');
				} else if (myvar === 3) {
					editBuilder.insert(position, '>');
					myvar = 0;
				} 
			}
		});
	});

const zCommand = vscode.commands.registerCommand('myExtension.zCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'z');
				} else if (myvar === 1) {
					vscode.commands.executeCommand('editor.foldAll');
				}else if (myvar === 2) {
					vscode.commands.executeCommand('editor.unfoldAll');
					myvar = 1;
				} else if (myvar === 3) {
					editBuilder.insert(position, '-');
					myvar = 0;
				} 
			}
		});
	});
const hCommand = vscode.commands.registerCommand('myExtension.hCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					myvar = 3;
					vscode.window.setStatusBarMessage(`myvar = ${myvar}`, 1000);
				}else if (myvar === 4) {
					vscode.commands.executeCommand('outdent');
				
				}
			}
		});
	});
const qCommand = vscode.commands.registerCommand('myExtension.qCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'q');
				}else if (myvar === 1) {
					vscode.commands.executeCommand('editor.action.clipboardCopyAction');
					vscode.window.setStatusBarMessage('copy line', 1000);
								
				}else if (myvar === 4) {
					vscode.commands.executeCommand('editor.action.clipboardCopyAction');
					vscode.commands.executeCommand('cancelSelection');
					myvar = 1;
				}else if (myvar === 2) {
					vscode.commands.executeCommand('editor.action.selectAll');
					myvar = 1;
					
				} else if (myvar === 3 || myvar ===5) {
					editBuilder.insert(position, ',');
					myvar = 0;
				}        
			}
		});
	});
	const wCommand = vscode.commands.registerCommand('myExtension.wCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'w');
				}else if (myvar === 1) {
					vscode.commands.executeCommand('editor.action.clipboardPasteAction');
				}else if (myvar === 2) {
					vscode.commands.executeCommand('cursorTop');
				} else if (myvar === 3) {
					editBuilder.insert(position, ';');
					myvar = 0;
				}        
			}
		});
	});
	const eCommand = vscode.commands.registerCommand('myExtension.eCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'e');
				}else if (myvar === 1) {
					vscode.commands.executeCommand('editor.action.clipboardCutAction')
				}else if (myvar === 4) {
					vscode.commands.executeCommand('editor.action.clipboardCutAction')
					myvar = 1;
				}else if (myvar === 2) {
					vscode.commands.executeCommand('cursorBottom')
					
				} else if (myvar === 3) {
					editBuilder.insert(position, '_');
					myvar = 0;
				}    
			}
		});
	});
	const spaceCommand = vscode.commands.registerCommand('myExtension.spaceCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0 || myvar ===5) {
					editBuilder.insert(position, ' ');
				}else if (myvar === 1) {
					myvar = 4;
					vscode.window.setStatusBarMessage(`myvar = ${myvar}`, 1000);

				}else if (myvar === 4) {
					myvar = 4;
					vscode.commands.executeCommand('tab');
					
				}      
			}
		});
	});
	const aCommand = vscode.commands.registerCommand('myExtension.aCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'a');
				}else if (myvar === 1) {
					vscode.commands.executeCommand('redo');

				}else if (myvar === 3) {
					editBuilder.insert(position, ':');
					myvar = 0;
				}      
			}
		});
	});
	const sCommand = vscode.commands.registerCommand('myExtension.sCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 's');
				}else if (myvar === 1) {
					vscode.commands.executeCommand('workbench.action.files.save');

				}else if (myvar === 2) {
					vscode.commands.executeCommand('cursorPageUp');
				}else if (myvar === 3 || myvar ===5) {
					editBuilder.insert(position, '.');
					myvar = 0;
				}    
			}
		});
	});
	const dCommand = vscode.commands.registerCommand('myExtension.dCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'd');
				}else if (myvar === 1) {
					vscode.commands.executeCommand('undo');
				}else if (myvar === 2) {
					vscode.commands.executeCommand('cursorPageDown');
				}else if (myvar === 3) {
					editBuilder.insert(position, '=');
					myvar = 0;
					
				}     
			}
		});
	}); 
	const hxCommand = vscode.commands.registerCommand('myExtension.hxCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'h');
				}else if (myvar === 1) {
					vscode.commands.executeCommand('editor.action.addSelectionToNextFindMatch');
					myvar = 4;
				}else if (myvar === 2) {
					vscode.commands.executeCommand('scrollPageDown');
				}else if (myvar === 3) {
					editBuilder.insert(position, '%');
					myvar = 0;
				}    
			}
		});
	});
	const vCommand = vscode.commands.registerCommand('myExtension.vCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'v');
				}else if (myvar === 1) {
					const filePath = editor.document.fileName;
					const folderPath = path.dirname(filePath)
					vscode.env.clipboard.writeText(folderPath).then(() => {
						vscode.commands.executeCommand('workbench.action.tasks.runTask', 'NavegadorTree');
					});
				}else if (myvar === 2) {
					vscode.commands.executeCommand('workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup');
					myvar = 1 ;
			    }  else if (myvar === 3) {
					editBuilder.insert(position, '$');
					myvar = 0;
				} 
		
			}
		});
	});
	const rCommand = vscode.commands.registerCommand('myExtension.rCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'r');
				}else if (myvar === 1) {
					vscode.commands.executeCommand('workbench.action.closeActiveEditor');
				}else if (myvar === 2) {
					vscode.commands.executeCommand('scrollPageDown');
				}  else if (myvar === 3) {
				editor.edit(editBuilder => {
					editBuilder.insert(position, '``');
					}).then(() => {
						vscode.commands.executeCommand('cursorLeft');
					});
					myvar = 0;
				} 
			}
		});
		
	}); 
    const backSpaceCommand = vscode.commands.registerCommand('myExtension.backSpaceCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		if (myvar === 1) {
	const document = editor.document;
	const pos = editor.selection.active;

	// Obtener el texto y la indentación de la línea actual
	const currentLineText = document.lineAt(pos.line).text;
	const indentMatch = currentLineText.match(/^\s*/);
	const indentation = indentMatch ? indentMatch[0] : '';

	editor.edit(editBuilder => {
		// Inserta una nueva línea debajo con la misma indentación
		const insertPos = new vscode.Position(pos.line + 1, 0);
		editBuilder.insert(insertPos, indentation + '\n');
	}).then(() => {
		// Mueve el cursor a la nueva línea, justo después de la indentación
		const newCursorPos = new vscode.Position(pos.line + 1, indentation.length);
		editor.selection = new vscode.Selection(newCursorPos, newCursorPos);
	});
		}
		else if (myvar === 2) {
			vscode.commands.executeCommand('lineBreakInsert');
			vscode.commands.executeCommand('cursorDown');
			myvar = 0;
		}else if(myvar === 0 || myvar ===5) {
			vscode.commands.executeCommand('deleteLeft');
		}else if (myvar === 4){
			vscode.commands.executeCommand('deleteLeft');
			 myvar = 1;
		}else if (myvar === 3) {
			editor.edit(editBuilder => {
				const selections = editor.selections;
				for (const selection of selections) {
					const position = selection.active;
						editBuilder.insert(position, '?');
						myvar = 0;
				}
			});							
		}
		
	});
	const nCommand = vscode.commands.registerCommand('myExtension.nCommand', () => {
	
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
		
			const selections = editor.selections;

			for (const selection of selections) {
			
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'n');
				}else if (myvar === 1) {
					vscode.commands.executeCommand('workbench.action.closeActiveEditor');
				}else if (myvar === 2) {
					vscode.commands.executeCommand('scrollPageDown');
				}else if (myvar === 3) {
					editBuilder.insert(position, '*');
					myvar = 0;
				}else if (myvar === 5) {
					editBuilder.insert(position, '2');
				}

			}
		});
	}); 
	
	const bCommand = vscode.commands.registerCommand('myExtension.bCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'b');
				}else if (myvar === 1) {
					vscode.commands.executeCommand('workbench.action.closeActiveEditor');
				}else if (myvar === 2) {
					vscode.commands.executeCommand('scrollPageDown');
				}else if (myvar === 3) {
					editBuilder.insert(position, '#');
					myvar = 0;
				}else if (myvar === 5) {
					editBuilder.insert(position, '3');
				}
			}
		});
	}); 
	const iCommand = vscode.commands.registerCommand('myExtension.iCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'i');
				}else if (myvar === 1) {
					vscode.commands.executeCommand('workbench.action.closeActiveEditor');
				}else if (myvar === 2) {
					vscode.commands.executeCommand('scrollPageDown');
				}else if (myvar === 3) {
				editor.edit(editBuilder => {
					editBuilder.insert(position, '[]');
					}).then(() => {
						vscode.commands.executeCommand('cursorLeft');
					});
					myvar = 0;
				}
			}
		});
	}); 
	
	const uCommand = vscode.commands.registerCommand('myExtension.uCommand', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		editor.edit(editBuilder => {
			const selections = editor.selections;

			for (const selection of selections) {
			
				const position = selection.active;

				if (myvar === 0) {
					editBuilder.insert(position, 'u');
				}else if (myvar === 1) {
					myvar = 5;
					vscode.window.setStatusBarMessage(`myvar = ${myvar}`, 1000);
				}else if (myvar === 5) {
					editBuilder.insert(position, '4');
				}

			}
		});
	}); 
	context.subscriptions.push(toggleCommand
		, qCommand
		, uCommand
		, nCommand
		, fCommand
		, rCommand
		, iCommand
		, vCommand
		, backSpaceCommand
		, hxCommand
		, wCommand
		, eCommand
		, aCommand
		, sCommand
		, dCommand
		, zCommand
		, spaceCommand
		, xCommand
		, cCommand
		, lCommand
		, gCommand
		, oCommand
		, pCommand
		, mCommand
		, jCommand
		, hCommand
		, bCommand
		, kCommand
		, yCommand);
}

export function deactivate() {}