#include <stdio.h>
#include <string.h>

void vuln_function(char *input) {
    char buffer[64];
    strcpy(buffer, input); // Copie l'entrée dans le tampon sans vérifier sa taille
}

int main(int argc, char *argv[]) {
    if (argc > 1) {
        vuln_function(argv[1]);
    } else {
        printf("Usage: %s <input>\n", argv[0]);
    }
    return 0;
}