#ifndef ASTAR_HPP
#define ASTAR_HPP

#include <utility>
#include <vector>

class AStar {
public:
    AStar(const std::vector<bool>& collisionGrid,
        int cols, int rows, bool moveDiagonally)
        : collisionGrid(collisionGrid)
        , cols(cols)
        , rows(rows)
        , moveDiagonally(moveDiagonally) {
    }
    std::vector<std::pair<int, int>> findPath(
        int x1, int y1, int x2, int y2
    );

private:
    const std::vector<bool>& collisionGrid;
    int cols, rows;
    bool moveDiagonally;
    const std::vector<std::pair<int, int>> directions = {
        { 0, 1 }, { 1, 0 }, { 0, -1 }, { -1, 0 },
        { -1, -1 }, { 1, 1 }, { -1, 1 }, { 1, -1 }
    };
    
    float heuristic_cost_estimate(int x1, int y1, int x2, int y2);
    bool isCollisionAt(int x, int y);
};

#endif /* ASTAR_HPP */