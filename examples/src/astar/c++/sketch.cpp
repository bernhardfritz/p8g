#include <glm/glm.hpp>

#include "p8g.hpp"
#include "astar.hpp"

using namespace p8g;

const int rows = 100, cols = 100;
float w, h, wh, hh;
std::vector<bool> collisionGrid(cols * rows);
int gx = cols - 1, gy = rows - 1;
AStar* astar;
std::vector<std::pair<int, int>> path;

int coordsToIndex(int x, int y) {
    return y * cols + x;
}

void initCollisionGrid() {
    for (int y = 0; y < rows; y++) {
        for (int x = 0; x < cols; x++) {
            collisionGrid[coordsToIndex(x, y)] = p8g::random() < 0.25f;
        }
    }
    // ensure there is no collision at the start point
    collisionGrid[coordsToIndex(cols / 2, rows / 2)] = false;
}

void initAStar() {
    delete astar;
    astar = new AStar(collisionGrid, cols, rows, true);
    path = astar->findPath(cols / 2, rows / 2, gx, gy);
}

void p8g::draw() {
    background(255.f);
    for (int y = 0; y < rows; y++) {
        for (int x = 0; x < cols; x++) {
            if (collisionGrid[coordsToIndex(x, y)]) {
                stroke(0.f);
                strokeWeight(w);
                point(x * w + w / 2.0f, y * h + h / 2.0f);
            }
        }
    }
    if (path.size() > 1) {
        for (int i = 1; i < path.size(); i++) {
            stroke(255.f, 0.f, 255.f);
            strokeWeight(wh);
            line(
                path[i - 1].first * w + wh,
                path[i - 1].second * h + hh,
                path[i].first * w + wh,
                path[i].second * h + hh
            );
        }
    }
}

void p8g::keyPressed() {}
void p8g::keyReleased() {}

void p8g::mouseMoved() {
    int prevGx = gx, prevGy = gy;
    gx = glm::clamp<int>(glm::min(mouseX, (float) width) / w, 0, cols - 1);
    gy = glm::clamp<int>(glm::min(mouseY, (float) height) / h, 0, rows - 1);
    if (gx != prevGx || gy != prevGy) {
        initAStar();
    }
}

void p8g::mousePressed() {}
void p8g::mouseReleased() {}
void p8g::mouseWheel(float delta) {}

int main() {
    const int WIDTH = 320;
    const int HEIGHT = 320;
    w = (float) WIDTH / cols;
    h = (float) HEIGHT / rows;
    wh = w / 2.0f;
    hh = h / 2.0f;
    initCollisionGrid();
    initAStar();
    run(WIDTH, HEIGHT, "A*");
}