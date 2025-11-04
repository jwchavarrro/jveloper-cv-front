/**
 * @file constants.ts
 * @description Constantes utilizadas en la ventana de CV
 * @module components/pages/windows/programs/cv/utils/constants
 */

import type { DropdownMenuItemType } from "@/components/atomic-desing/molecules/menus/dropdown-menu";

/**
 * @constant MENU_HEADER
 * @description Constantes para el header del CV
 */
export const MENU_HEADER = {
  FRAGMENTS: {
    CV_HEADER: {
      TITLE: "CV - John Chavarro Urrea",
      MENU_ITEMS: [
        {
          name: "Archivo",
          items: [
            {
              label: "Nuevo Text File",
              type: "action" as const,
              onClick: () => console.log("Nuevo archivo"),
            },
            {
              label: "Nueva Ventana",
              type: "action" as const,
              onClick: () => console.log("Nueva ventana"),
            },
            {
              type: "submenu" as const,
              label: "Nueva Ventana con Perfil",
              items: [
                {
                  label: "Perfil por Defecto",
                  type: "action" as const,
                  onClick: () => console.log("Perfil por defecto"),
                },
                {
                  label: "Más Perfiles...",
                  type: "action" as const,
                  onClick: () => console.log("Más perfiles"),
                },
              ],
            },
            { type: "separator" as const },
            {
              label: "Abrir Archivo...",
              type: "action" as const,
              onClick: () => console.log("Abrir archivo"),
            },
            {
              label: "Abrir Carpeta...",
              type: "action" as const,
              onClick: () => console.log("Abrir carpeta"),
            },
            {
              label: "Abrir Workspace desde Archivo...",
              type: "action" as const,
              onClick: () => console.log("Abrir workspace"),
            },
            {
              type: "submenu" as const,
              label: "Abrir Reciente",
              items: [
                {
                  label: "Más Recientes",
                  type: "action" as const,
                  onClick: () => console.log("Más recientes"),
                },
                { type: "separator" as const },
                {
                  label: "Proyecto 1",
                  type: "action" as const,
                  onClick: () => console.log("Proyecto 1"),
                },
                {
                  label: "Proyecto 2",
                  type: "action" as const,
                  onClick: () => console.log("Proyecto 2"),
                },
              ],
            },
            { type: "separator" as const },
            {
              label: "Agregar Carpeta al Workspace...",
              type: "action" as const,
              onClick: () => console.log("Agregar carpeta"),
            },
            {
              label: "Guardar Workspace Como...",
              type: "action" as const,
              onClick: () => console.log("Guardar workspace"),
            },
            {
              label: "Duplicar Workspace",
              type: "action" as const,
              onClick: () => console.log("Duplicar workspace"),
            },
            { type: "separator" as const },
            {
              label: "Cerrar Editor",
              type: "action" as const,
              onClick: () => console.log("Cerrar editor"),
            },
            {
              label: "Cerrar Ventana",
              type: "action" as const,
              onClick: () => console.log("Cerrar ventana"),
            },
          ] as DropdownMenuItemType[],
        },
        {
          name: "Editar",
          items: [
            {
              label: "Deshacer",
              type: "action" as const,
              onClick: () => console.log("Deshacer"),
            },
            {
              label: "Rehacer",
              type: "action" as const,
              onClick: () => console.log("Rehacer"),
            },
            { type: "separator" as const },
            {
              label: "Cortar",
              type: "action" as const,
              onClick: () => console.log("Cortar"),
            },
            {
              label: "Copiar",
              type: "action" as const,
              onClick: () => console.log("Copiar"),
            },
            {
              label: "Pegar",
              type: "action" as const,
              onClick: () => console.log("Pegar"),
            },
            {
              label: "Buscar y Reemplazar",
              type: "action" as const,
              onClick: () => console.log("Buscar y reemplazar"),
            },
            { type: "separator" as const },
            {
              label: "Formatear Documento",
              type: "action" as const,
              onClick: () => console.log("Formatear documento"),
            },
            {
              label: "Formatear Selección",
              type: "action" as const,
              onClick: () => console.log("Formatear selección"),
            },
          ] as DropdownMenuItemType[],
        },
        {
          name: "Seleccionar",
          items: [
            {
              label: "Seleccionar Todo",
              type: "action" as const,
              onClick: () => console.log("Seleccionar todo"),
            },
            {
              label: "Expandir Selección",
              type: "action" as const,
              onClick: () => console.log("Expandir selección"),
            },
            {
              label: "Reducir Selección",
              type: "action" as const,
              onClick: () => console.log("Reducir selección"),
            },
            { type: "separator" as const },
            {
              label: "Seleccionar Todas las Ocurrencias",
              type: "action" as const,
              onClick: () => console.log("Seleccionar todas las ocurrencias"),
            },
            {
              label: "Cambiar Todas las Ocurrencias",
              type: "action" as const,
              onClick: () => console.log("Cambiar todas las ocurrencias"),
            },
            {
              label: "Seleccionar a la Línea",
              type: "action" as const,
              onClick: () => console.log("Seleccionar a la línea"),
            },
            {
              label: "Seleccionar Palabra",
              type: "action" as const,
              onClick: () => console.log("Seleccionar palabra"),
            },
          ] as DropdownMenuItemType[],
        },
        {
          name: "Ver",
          items: [
            {
              label: "Paleta de Comandos...",
              type: "action" as const,
              onClick: () => console.log("Paleta de comandos"),
            },
            {
              label: "Abrir Vista...",
              type: "action" as const,
              onClick: () => console.log("Abrir vista"),
            },
            { type: "separator" as const },
            {
              label: "Explorador",
              type: "action" as const,
              onClick: () => console.log("Explorador"),
            },
            {
              label: "Búsqueda",
              type: "action" as const,
              onClick: () => console.log("Búsqueda"),
            },
            {
              label: "Control de Código Fuente",
              type: "action" as const,
              onClick: () => console.log("Control de código fuente"),
            },
            {
              label: "Ejecutar y Depurar",
              type: "action" as const,
              onClick: () => console.log("Ejecutar y depurar"),
            },
            {
              label: "Extensiones",
              type: "action" as const,
              onClick: () => console.log("Extensiones"),
            },
            { type: "separator" as const },
            {
              label: "Terminal",
              type: "action" as const,
              onClick: () => console.log("Terminal"),
            },
            {
              label: "Problemas",
              type: "action" as const,
              onClick: () => console.log("Problemas"),
            },
            {
              label: "Salida",
              type: "action" as const,
              onClick: () => console.log("Salida"),
            },
            {
              label: "Consola de Depuración",
              type: "action" as const,
              onClick: () => console.log("Consola de depuración"),
            },
            { type: "separator" as const },
            {
              type: "submenu" as const,
              label: "Aspecto",
              items: [
                {
                  label: "Pantalla Completa",
                  type: "action" as const,
                  onClick: () => console.log("Pantalla completa"),
                },
                {
                  label: "Modo Zen",
                  type: "action" as const,
                  onClick: () => console.log("Modo zen"),
                },
                {
                  label: "Centro de Actividad",
                  type: "action" as const,
                  onClick: () => console.log("Centro de actividad"),
                },
              ],
            },
          ] as DropdownMenuItemType[],
        },
        {
          name: "Ir",
          items: [
            {
              label: "Volver",
              type: "action" as const,
              onClick: () => console.log("Volver"),
            },
            {
              label: "Avanzar",
              type: "action" as const,
              onClick: () => console.log("Avanzar"),
            },
            { type: "separator" as const },
            {
              label: "Siguiente Problema",
              type: "action" as const,
              onClick: () => console.log("Siguiente problema"),
            },
            {
              label: "Problema Anterior",
              type: "action" as const,
              onClick: () => console.log("Problema anterior"),
            },
            { type: "separator" as const },
            {
              label: "Ir a Línea...",
              type: "action" as const,
              onClick: () => console.log("Ir a línea"),
            },
            {
              label: "Ir a Símbolo...",
              type: "action" as const,
              onClick: () => console.log("Ir a símbolo"),
            },
            {
              label: "Ir a Símbolo en Workspace...",
              type: "action" as const,
              onClick: () => console.log("Ir a símbolo en workspace"),
            },
          ] as DropdownMenuItemType[],
        },
        {
          name: "Ejecutar",
          items: [
            {
              label: "Iniciar Depuración",
              type: "action" as const,
              onClick: () => console.log("Iniciar depuración"),
            },
            {
              label: "Ejecutar Sin Depurar",
              type: "action" as const,
              onClick: () => console.log("Ejecutar sin depurar"),
            },
            {
              label: "Detener Depuración",
              type: "action" as const,
              onClick: () => console.log("Detener depuración"),
            },
            {
              label: "Reiniciar Depuración",
              type: "action" as const,
              onClick: () => console.log("Reiniciar depuración"),
            },
            { type: "separator" as const },
            {
              label: "Ejecutar Tarea...",
              type: "action" as const,
              onClick: () => console.log("Ejecutar tarea"),
            },
            {
              label: "Ejecutar Tarea Activa",
              type: "action" as const,
              onClick: () => console.log("Ejecutar tarea activa"),
            },
          ] as DropdownMenuItemType[],
        },
        {
          name: "Terminal",
          items: [
            {
              label: "Nueva Terminal",
              type: "action" as const,
              onClick: () => console.log("Nueva terminal"),
            },
            {
              label: "Dividir Terminal",
              type: "action" as const,
              onClick: () => console.log("Dividir terminal"),
            },
            {
              label: "Ejecutar Tarea...",
              type: "action" as const,
              onClick: () => console.log("Ejecutar tarea"),
            },
            { type: "separator" as const },
            {
              type: "submenu" as const,
              label: "Renombrar Terminal",
              items: [
                {
                  label: "Terminal 1",
                  type: "action" as const,
                  onClick: () => console.log("Renombrar terminal 1"),
                },
                {
                  label: "Terminal 2",
                  type: "action" as const,
                  onClick: () => console.log("Renombrar terminal 2"),
                },
              ],
            },
            {
              type: "submenu" as const,
              label: "Seleccionar Perfil de Terminal",
              items: [
                {
                  label: "PowerShell",
                  type: "action" as const,
                  onClick: () => console.log("PowerShell"),
                },
                {
                  label: "Command Prompt",
                  type: "action" as const,
                  onClick: () => console.log("Command Prompt"),
                },
                {
                  label: "Git Bash",
                  type: "action" as const,
                  onClick: () => console.log("Git Bash"),
                },
              ],
            },
          ] as DropdownMenuItemType[],
        },
        {
          name: "Ayuda",
          items: [
            {
              label: "Bienvenida",
              type: "action" as const,
              onClick: () => console.log("Bienvenida"),
            },
            {
              label: "Mostrar Todos los Comandos",
              type: "action" as const,
              onClick: () => console.log("Mostrar todos los comandos"),
            },
            {
              label: "Documentación",
              type: "action" as const,
              onClick: () => console.log("Documentación"),
            },
            {
              label: "Notas de la Versión",
              type: "action" as const,
              onClick: () => console.log("Notas de la versión"),
            },
            { type: "separator" as const },
            {
              label: "Tutorial",
              type: "action" as const,
              onClick: () => console.log("Tutorial"),
            },
            {
              label: "Tips y Trucos",
              type: "action" as const,
              onClick: () => console.log("Tips y trucos"),
            },
            { type: "separator" as const },
            {
              label: "Verificar Actualizaciones",
              type: "action" as const,
              onClick: () => console.log("Verificar actualizaciones"),
            },
            {
              label: "Acerca de",
              type: "action" as const,
              onClick: () => console.log("Acerca de"),
            },
          ] as DropdownMenuItemType[],
        },
      ],
    },
  },
};
